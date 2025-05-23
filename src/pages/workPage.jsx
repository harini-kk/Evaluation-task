import InputField from "../components/inputField";
import { mediaUpload } from "../utils/media";
import MediaUpload from "../components/mediaUpload";
import { getAuthToken } from "../utils/auth";
import { setUser } from "../redux/globalSlice";
import { createWork, removeWork, updateUser, updateWork } from "../utils/works";
import { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setWorks } from "../redux/globalSlice";
import { useNavigate } from "react-router-dom";

export default function Works() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state?.app?.works || []);
  const works = [...data].sort(
    (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
  );
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [selectedWork, setSelectedWork] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [uploadedMedia, setUploadedMedia] = useState(null);
  const [mediaLoading, setMediaLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const formRef = useRef(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [modalOpen]);

  useEffect(() => {
    const loginWithEnv = async () => {
      try {
        const res = await getAuthToken(
          process.env.REACT_APP_ADMIN_EMAIL,
          process.env.REACT_APP_ADMIN_PASSWORD
        );
        if (res?.token) {
          dispatch(setUser({ token: res.token, user: res.user }));
          setLoadingAuth(false);
        } else {
          console.error("Login failed. Token missing.");
          navigate("/login");
        }
      } catch (err) {
        console.error("Auto-login failed:", err);
        navigate("/login");
      }
    };

    loginWithEnv();
  }, [dispatch, navigate]);

  const openModal = (work) => {
    setUploadedMedia(null);
    setSelectedWork(work);
    if (work) {
      Object.keys(work).forEach((key) => setValue(key, work[key]));
      setValue(
        "date",
        work?.date
          ? new Date(work.date).toISOString().split("T")[0]
          : new Date().toISOString().split("T")[0]
      );
    } else {
      setValue("title", "");
      setValue("description", "");
      setValue("works", null);
      setValue("date", new Date().toISOString().split("T")[0]);
    }
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedWork(null);
    setModalOpen(false);
  };

  const updateMedia = async (event) => {
    setMediaLoading(true);
    const file = event.target.files[0];
    if (!file) return;
    const allowedTypes = ["image/", "video/"];
    if (!allowedTypes.some((type) => file?.type?.startsWith(type))) {
      toast.error(
        "Unsupported file format. Only images and videos are allowed."
      );
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("alt", "Work Image");

    try {
      const response = await mediaUpload(formData, uploadedMedia?.id, navigate);
      if (response?.doc) {
        setUploadedMedia(response.doc);
      }
    } catch (error) {
      toast.error("Error uploading the media");
    } finally {
      setMediaLoading(false);
    }
  };

  const onSubmit = async (data) => {
    const payload = {
      title: data?.title,
      description: data?.description,
      date: data?.date,
      works: uploadedMedia?.id || selectedWork?.works?.id,
    };
    setLoading(true);
    try {
      let result;
      if (selectedWork) {
        result = await updateWork(payload, selectedWork?.id, navigate);
        dispatch(
          setWorks(
            works.map((item) =>
              item.id === result.doc.id ? { ...item, ...result.doc } : item
            )
          )
        );
        toast.success("Work updated successfully");
      } else {
        result = await createWork(payload, navigate);
        if (result?.doc) {
          const updatedWorkIds = works?.map((work) => work.id) || [];
          updatedWorkIds.push(result.doc.id);
          const response = await updateUser({ work: updatedWorkIds }, navigate);
          dispatch(setWorks(response?.doc?.work));
          toast.success("New work added successfully");
        }
      }
      closeModal();
    } catch (error) {
      toast.error(
        error?.message || "An error occurred while updating your work"
      );
    } finally {
      setLoading(false);
    }
  };

  const deleteWork = async () => {
    setDeleteLoading(true);
    try {
      await removeWork(selectedWork?.id, navigate);
      const updatedWorkIds = works
        .map((work) => work.id)
        .filter((id) => id && id !== selectedWork?.id);
      const response = await updateUser({ work: updatedWorkIds }, navigate);
      dispatch(setWorks(response?.doc?.work));
      toast.success("Work deleted successfully!");
    } catch (error) {
      toast.error(error?.message || "Error deleting the work");
    } finally {
      setDeleteLoading(false);
      setModalOpen(false);
    }
  };

  const handleFormSubmit = () => {
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  };
  return (
    <div className="flex justify-center">
      <div className="my-8 grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div
          className="w-full h-70 min-[480px]:w-48 min-[480px]:h-56 flex items-center justify-center border border-[#B2B2B2] bg-[#EBEBEB] rounded-md cursor-pointer"
          onClick={() => openModal(null)}
        >
          <div className="text-center">
            <div className="mx-auto bg-primary text-white w-16 h-16 flex items-center justify-center rounded-full">
              <img
                src="/assets/plus.png"
                alt="Add new work"
                className="w-9 h-9"
              />
            </div>
            <p className="text-xs mt-2">Add new work</p>
          </div>
        </div>
        {works.map((work, index) => (
          <div
            key={index}
            className="w-full h-70 min-[480px]:w-48 min-[480px]:h-56 border border-[#B2B2B2] bg-[#EBEBEB] rounded-md cursor-pointer overflow-hidden relative flex items-center justify-center"
            onClick={() => openModal(work)}
          >
            {work?.works?.mimeType?.includes("video") ? (
              <>
                <video className="w-full h-full object-cover">
                  <source src={work?.works?.url} type="video/mp4" />
                </video>
                <button className="z-[2] absolute m-auto inset-0 flex items-center justify-center bg-black/40 text-white text-4xl rounded-full w-16 h-16 transition hover:bg-black/50">
                  <img src="/assets/play.png" className="w-7 h-7" alt="play" />
                </button>
              </>
            ) : (
              <img
                src={work?.works?.url || "/assets/gallery_icon.png"}
                alt="Work Image"
                className={`${
                  work?.works?.url ? "w-full h-full" : "w-10 h-10"
                } object-cover`}
              />
            )}
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="z-50 fixed inset-0 backdrop-blur-2xl bg-black/80 flex justify-center items-center p-4">
          <div className="relative top-4 max-w-3xl w-full">
            <div className="bg-white h-[85vh] pt-8 pb-4 overflow-hidden rounded-md flex flex-col">
              <h2 className="text-lg font-bold px-8 mb-4 flex-shrink-0 shadow-b-md pb-2">
                {selectedWork ? `Edit ${selectedWork?.title}` : "Add New Work"}
              </h2>

              <form
                ref={formRef}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 px-8 flex-grow overflow-auto"
              >
                <InputField
                  label="Title"
                  name="title"
                  type="text"
                  register={register}
                  placeholder="Enter title"
                  error={errors?.title}
                  required
                />
                <div className="mb-4">
                  <label className="block font-bold">Description</label>
                  <textarea
                    {...register("description")}
                    rows="3"
                    placeholder="Enter a brief introduction about work"
                    className="mt-1 p-2 w-full border-gray border rounded-md focus:ring focus:ring-blue-300"
                  />
                </div>
                <InputField
                  label="Date"
                  name="date"
                  type="date"
                  register={register}
                  placeholder="Select a date"
                />
                <label className="block font-bold">Media</label>
                <div
                  className={`relative ${
                    !selectedWork?.works ? "w-1/2 h-32" : ""
                  } max-w-full sm:max-w-[50%] bg-[#D9D9D9] flex flex-col items-center justify-center overflow-hidden group rounded-md`}
                >
                  <MediaUpload
                    path="works"
                    uploadedMedia={uploadedMedia}
                    setUploadedMedia={setUploadedMedia}
                    selectedMedia={selectedWork?.works}
                    updateMedia={updateMedia}
                    mediaLoading={mediaLoading}
                  />
                </div>
              </form>

              <div className="text-center text-sm sm:text-normal flex justify-end gap-4 px-8 flex-shrink-0 mt-4 shadow-t-md">
                {selectedWork?.id && (
                  <button
                    type="button"
                    disabled={deleteLoading}
                    className={`px-4 py-2 bg-gray text-black rounded-md flex items-center gap-2.5 ${
                      deleteLoading && "opacity-80"
                    }`}
                    onClick={deleteWork}
                  >
                    Delete
                    {deleteLoading ? (
                      <div className="loader small" />
                    ) : (
                      <img src="/assets/delete.svg" alt="" width="15" />
                    )}
                  </button>
                )}
                <button
                  type="button"
                  disabled={loading}
                  onClick={handleFormSubmit}
                  className={`px-4 py-2 bg-primary text-white rounded-md flex items-center gap-2.5 ${
                    loading && "opacity-80"
                  }`}
                >
                  Save Changes
                  {loading ? (
                    <div className="loader small" />
                  ) : (
                    <img src="/assets/save_icon.png" alt="" width="24" />
                  )}
                </button>
              </div>
            </div>
            <button
              className="absolute -top-3 -right-3"
              onClick={() => closeModal(null)}
            >
              <img
                src="/assets/close_icon.png"
                alt="Close icon"
                className="w-6"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
