import { useState, useEffect, useRef, useCallback } from "react";
import { toast } from "react-toastify";
import { fetchMedia } from "../utils/media";

export default function MediaUpload({
  filterMedia,
  path,
  uploadedMedia,
  setUploadedMedia,
  selectedMedia,
  updateMedia,
  mediaLoading,
}) {
  const [existingMedia, setExistingMedia] = useState([]);
  const [isMediaModal, setIsMediaModal] = useState(false);
  const [selectedExistingMedia, setSelectedExistingMedia] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef(null);

  const loadMedia = useCallback(
    async (pageNum) => {
      setLoading(true);
      try {
        const data = await fetchMedia(pageNum, filterMedia);
        if (pageNum === 1) {
          setExistingMedia(data?.docs);
        } else {
          setExistingMedia((prev) => [...prev, ...data?.docs]);
        }
        setHasMore(data?.nextPage);
      } catch (error) {
        toast.error("Error fetching media");
      }
      setLoading(false);
    },
    [filterMedia]
  );

  useEffect(() => {
    if (page !== null) {
      loadMedia(page);
    }
  }, [page, loadMedia]);

  useEffect(() => {
    if (isMediaModal) {
      setExistingMedia([]);
      setPage(1);
    }
  }, [isMediaModal]);

  const lastMediaRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const handleSelectMedia = useCallback(() => {
    if (selectedExistingMedia?.id) {
      const media = existingMedia.find(
        (item) => item?.id === selectedExistingMedia?.id
      );
      setUploadedMedia(media);
      updateMedia({ target: { files: [selectedExistingMedia] } });
      setIsMediaModal(false);
      setPage(null);
    }
  }, [existingMedia, selectedExistingMedia, setUploadedMedia, updateMedia]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMediaModal(false);
        setPage(null);
      }
      if (event.key === "Enter") {
        handleSelectMedia();
      }
    };
    if (isMediaModal) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMediaModal, handleSelectMedia]);

  return (
    <>
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity"></div>
      <input
        id="fileInput"
        className="hidden absolute inset-0 cursor-pointer"
        type="file"
        accept={`${filterMedia ? `${filterMedia}/*` : "image/*,video/*"}`}
        onChange={updateMedia}
      />
      {uploadedMedia?.mimeType?.includes("video") ||
      selectedMedia?.mimeType?.includes("video") ? (
        <video
          src={uploadedMedia?.url || selectedMedia?.url}
          className="w-full h-full object-cover"
          autoPlay
        ></video>
      ) : (
        <img
          src={
            uploadedMedia?.url ||
            selectedMedia?.url ||
            "/assets/gallery_icon.png"
          }
          alt="Work Preview"
          className={`object-cover ${
            uploadedMedia?.url || selectedMedia?.url
              ? "w-full h-full"
              : "w-10 h-10"
          }`}
        />
      )}
      {mediaLoading ? (
        <div className="overlay-button absolute inset-0 flex items-center justify-center bg-black/50 z-10">
          <div className="loader small"></div>
        </div>
      ) : (
        <div
          className={`overlay-button absolute inset-0 flex ${
            path === "profile" ? "flex-col gap-1" : "flex-wrap"
          } items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10`}
        >
          <button
            type="button"
            onClick={() => document.getElementById("fileInput").click()}
            className={`${
              path === "profile" ? "text-[8px]" : "text-xs"
            } p-2 bg-primary text-white rounded-md`}
          >
            Upload new Media
          </button>
          <button
            type="button"
            onClick={() => setIsMediaModal(true)}
            className={`${
              path === "profile" ? "text-[7px]" : "text-xs ml-2"
            } p-2 bg-primary text-white rounded-md`}
          >
            Choose from existing
          </button>
        </div>
      )}

      {isMediaModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20 p-4">
          <div className="relative top-4 max-w-3xl w-full">
            <div className="relative bg-white h-[85vh] py-4 overflow-hidden rounded-md flex flex-col">
              {loading && page === 1 ? (
                <div className="loader"></div>
              ) : existingMedia?.length <= 0 ? (
                <div className="text-center">No media files to select</div>
              ) : (
                <>
                  <h2 className="text-lg px-8 mb-4 font-semibold">
                    Select Media
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-8 overflow-auto flex-grow">
                    {existingMedia.map((media, index) => (
                      <div
                        key={media.id}
                        ref={
                          index === existingMedia.length - 1
                            ? lastMediaRef
                            : null
                        }
                        className={`relative p-1 rounded-md h-fit ${
                          selectedExistingMedia?.id === media?.id
                            ? "border-2 border-primary"
                            : "hover:scale-105"
                        }`}
                        onClick={() => {
                          setSelectedExistingMedia(media);
                          setUploadedMedia(media);
                        }}
                      >
                        {media?.mimeType?.includes("video") ? (
                          <>
                            <video
                              className="w-full h-32 sm:h-40 md:h-48 object-cover cursor-pointer rounded-md"
                              autoPlay
                              muted
                              loop
                            >
                              <source src={media?.url} type="video/mp4" />
                            </video>
                            <button className="z-[2] absolute m-auto inset-0 flex items-center justify-center bg-black/40 text-white text-4xl rounded-full w-16 h-16">
                              <img
                                src="/assets/play.png"
                                className="w-7 h-7"
                                alt="play"
                              />
                            </button>
                          </>
                        ) : (
                          <img
                            src={media?.url}
                            alt={media?.filename}
                            className="w-full h-32 sm:h-40 md:h-48 object-cover cursor-pointer rounded-md"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="flex px-8 mt-4 justify-end">
                    <button
                      onClick={handleSelectMedia}
                      className="p-2 bg-primary text-white rounded-md"
                    >
                      Select
                    </button>
                  </div>
                </>
              )}
              {loading && page > 1 && <div className="loader"></div>}
            </div>
            <button
              className="absolute -top-3 -right-3"
              onClick={() => {
                setPage(null);
                setIsMediaModal(false);
              }}
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
    </>
  );
}
