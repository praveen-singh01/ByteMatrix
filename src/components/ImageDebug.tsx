"use client";

import { useEffect, useState } from "react";
import { getImagePath } from "@/utils/getImagePath";
import imageLoader from "@/utils/imageLoader";

export default function ImageDebug() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const testImages = [
    "praveen.jpeg",
    "pragya.png",
    "mihir.jpg",
  ];

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg z-50 max-w-xs text-xs opacity-70 hover:opacity-100 transition-opacity">
      <h3 className="font-bold mb-2">Image Path Debug</h3>
      <ul className="space-y-1">
        {testImages.map((img) => (
          <li key={img} className="mb-2">
            <div>
              <span className="font-medium">getImagePath:</span>{" "}
              <span className="text-green-600 dark:text-green-400 break-all">{getImagePath(img)}</span>
            </div>
            <div>
              <span className="font-medium">imageLoader:</span>{" "}
              <span className="text-blue-600 dark:text-blue-400 break-all">
                {imageLoader({ src: img, width: 100 })}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-700">
        <p>
          <span className="font-medium">NODE_ENV:</span>{" "}
          <span className="text-blue-600 dark:text-blue-400">{process.env.NODE_ENV}</span>
        </p>
        <p>
          <span className="font-medium">basePath:</span>{" "}
          <span className="text-blue-600 dark:text-blue-400">
            {process.env.NODE_ENV === "production" ? "/ByteMatrix" : ""}
          </span>
        </p>
      </div>
    </div>
  );
}
