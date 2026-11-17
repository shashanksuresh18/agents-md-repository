import React from "react";

export default function Footer() {
  return (
    <footer className="px-6 py-12 text-center text-sm text-gray-600 dark:text-gray-400 mt-24 bg-gray-50 dark:bg-gray-900/40 border-t border-gray-100 dark:border-gray-800">
      <div className="mx-auto mb-8 max-w-xl rounded-2xl border border-gray-200 bg-white p-5 text-left shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
          Latest News
        </p>
        <a
          href="https://nextjs.org/blog/next-15"
          target="_blank"
          rel="noreferrer"
          className="text-base font-semibold text-gray-900 hover:underline dark:text-white"
        >
          Next.js 15
        </a>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          React 19 support, caching improvements, and more in the latest major release.
        </p>
        <p className="mt-3 text-xs text-gray-500 dark:text-gray-500">
          October 21, 2024 · Source: Next.js Blog
        </p>
      </div>
      <p>
        Copyright © AGENTS.md a Series of LF Projects, LLC
        <br />
        For web site terms of use, trademark policy and other project policies please see{" "}
        <a href="https://lfprojects.org" target="_blank" className="underline hover:no-underline">
          https://lfprojects.org
        </a>
        .
      </p>
    </footer>
  );
}
