import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-slate-950 mt-12">
        <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-[#42C5E2] sm:text-5xl">
              Hack the world with us
            </h2>

            <p className="mx-auto mt-4 max-w-sm text-gray-500">
              Register for the DeKUT Hack and stand a chance to win amazing
              prizes, network with industry professionals and learn from the
              best.
            </p>

            <a
              href="https://forms.office.com/pages/responsepage.aspx?id=oBzDhDusrk6tEVGdgCM-b4fESVfay2FEjJAwLh7k8axUQUZCVVRTVkRCQktVSDYzUTM3SFhYMzFWOC4u"
              target="_blank"
              className="mt-8 inline-block rounded-full border border-[#42C5E2] px-12 py-3 text-sm font-medium text-[#42C5E2] hover:bg-[#42C5E2] hover:text-white"
            >
              Register
            </a>
          </div>
          <div className="mt-16 border-t border-gray-500 pt-8 sm:flex sm:items-center sm:justify-between lg:mt-24"></div>
          \
          <p className="text-gray-500 text-sm text-center">
            Designed & Built by{" "}
            <a
              href="https://github.com/divin3circle/"
              target="_blank"
              className="text-[#42C5E2]"
            >
              divin3circle
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
