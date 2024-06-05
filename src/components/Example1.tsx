"use client";

import { useLayoutEffect } from "react";
import Image from "next/image";

export const Demo1 = () => {
  useLayoutEffect(() => {
    document?.querySelector<HTMLElement>("#demo1Title")?.focus();
  }, []);

  return (
    <main className="p-10 scroll-auto">
      <h2
        id="demo1Title"
        className="text-2xl font-semibold mb-3 mt-3"
        tabIndex={-1}
      >
        Introduction to Web Accessibility
      </h2>
      <p>
        <Image
          alt="W3C - logo"
          src="https://www.w3.org/Icons/WWW/w3c_home_nb.png"
          width={72}
          height={48}
          className="float-right"
        />
        <Image
          alt="Web Accessibility initiative - logo"
          src="https://courses.edx.org/assets/courseware/v1/d87234081c0e593897b0fdf3dc422faa/asset-v1:W3Cx+WAI0.1x+3T2019+type@asset+block/WAI.png"
          width={200}
          height={48}
          className="float-right"
        />
        <Image
          alt="United Nations Educational, Scientific and Cultural Organization | UNESCO Institute for Information Technologies in Education - logo"
          src="https://courses.edx.org/assets/courseware/v1/9497f3f956d03f07e4049062f890f4ed/asset-v1:W3Cx+WAI0.1x+3T2019+type@asset+block/institute_iite_en_color.png"
          width={141}
          height={65}
          className="float-right"
        />
        This course is part of the{" "}
        <a href="https://w3cx.org/" target="_blank">
          W3Cx training program
        </a>
        , developed by the&nbsp;
        <a href="https://w3.org/WAI" target="_blank">
          W3C Web Accessibility Initiative (WAI)
        </a>{" "}
        in cooperation by the{" "}
        <a href="https://iite.unesco.org/" target="_blank">
          UNESCO Institute for Information Technologies in Education
        </a>
        . It implements the&nbsp;
        <a href="https://www.w3.org/WAI/curricula/" target="_blank">
          W3C Curricula on Web Accessibility
        </a>
        , and is designed for anyone interested in digital accessibility. It is
        suitable for technical or non-technical audiences including:
      </p>
      <Image
        alt=""
        width={300}
        height={3}
        className="w-full h-1"
        src="https://courses.edx.org/assets/courseware/v1/69967b1855807933c080f1d765394c64/asset-v1:W3Cx+WAI0.1x+3T2019+type@asset+block/gray-line.png"
      />

      <h2 id="section2" className="text-2xl font-semibold mb-3 mt-3">
        Web Accessibility
      </h2>
      <p>https://learn.udacity.com/courses/ud891</p>
      <figure
        className="mw-default-size figure float-right"
        typeof="mw:File/Thumb"
      >
        <a
          href="/wiki/File:Handicapped_Accessible_sign.svg"
          className="mw-file-description"
        >
          <Image
            alt="white line figure of a person seated over the axis of a wheel, blue background"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Handicapped_Accessible_sign.svg/220px-Handicapped_Accessible_sign.svg.png"
            decoding="async"
            width="220"
            height="220"
            className="float-right"
          />
        </a>
        <figcaption>
          This is the
          <a
            href="/wiki/International_Symbol_of_Access"
            title="International Symbol of Access"
          >
            internationally recognized symbol for accessibility
          </a>
          .
        </figcaption>
      </figure>
      <p>
        Good accessibility or a11y is crucial to making sure all users can
        access the content in your sites and applications. Making sure you
        consider accessibility at the start of your process will ensure that
        your final product is more polished and works for more people.
      </p>
      <p>
        Throughout this course we ll have you do a number of hands-on exercises
        to get familiar with accessibility topics and techniques. You can find
        all of the exercises in the project s GitHub repo(opens in a new tab).
        Go ahead and clone it now so you can reference it when we get to the
        quiz nodes.
      </p>
      <p>
        Note: We often shorten the word accessibility to a11y because there are
        11 letters between the A and Y in the word Accessibility. Sometimes you
        ll see this pattern used in other contexts like i18n for
        internationalization and l10n for localization.
      </p>
    </main>
  );
};

// <Image
//   alt="white line figure of a person seated over the axis of a wheel, blue background"
//   src="https://cdn.sanity.io/images/tlr8oxjg/production/6b064663a3a700b10aee4eaa01ca24ca1a030f60-1456x816.png?w=1920&q=100&fit=clip&auto=format"
//   decoding="async"
//   width="220"
//   height="220"
//   className="float-right"
// />;
