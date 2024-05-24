"use client";

import { useRef, useState } from "react";

export const Example1 = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const amountRef = useRef<HTMLSelectElement>();

  return (
    <>
      <div>Example 1 - No aria tag - Total price is not read</div>
      <div>
        <span>Amount</span>
        <select
          ref={amountRef}
          onChange={(event) => {
            setTotalPrice(Number.parseInt(amountRef.current?.value) * 4);
          }}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div>
        <span>Total price example 1 €</span>
        <label>{totalPrice}</label>
      </div>
    </>
  );
};

export const Demo1 = () => {
  return (
    <div>
      <img
        alt="Web Content Accessibility Guidelines"
        src="https://i0.wp.com/wcag.com/wp-content/uploads/2022/01/cropped-android-chrome-256x256-1.png?fit=512%2C512&ssl=1"
        width={"200px"}
        height={"200px"}
      />

      <h2>
        <span className="mw-headline" id="Legislation">
          Legislation
        </span>
      </h2>
      <p>
        The{" "}
        <a
          href="/wiki/Disability_rights_movement"
          title="Disability rights movement"
        >
          disability rights movement
        </a>{" "}
        advocates equal access to social, political, and economic life which
        includes not only physical access but access to the same tools,
        services, organizations and facilities as non-disabled people (e.g.,
        museums
        <sup id="cite_ref-10" className="reference">
          <a href="#cite_note-10">[10]</a>
        </sup>
        <sup id="cite_ref-11" className="reference">
          <a href="#cite_note-11">[11]</a>
        </sup>
        ). Article 9 of the{" "}
        <a href="/wiki/United_Nations" title="United Nations">
          United Nations
        </a>{" "}
        <a
          href="/wiki/Convention_on_the_Rights_of_Persons_with_Disabilities"
          title="Convention on the Rights of Persons with Disabilities"
        >
          Convention on the Rights of Persons with Disabilities
        </a>{" "}
        commits signatories to provide for full accessibility in their
        countries.
        <sup id="cite_ref-12" className="reference">
          <a href="#cite_note-12">[12]</a>
        </sup>
      </p>
      <figure className="mw-default-size" typeof="mw:File/Thumb">
        <a
          href="/wiki/File:Handicapped_Accessible_sign.svg"
          className="mw-file-description"
        >
          <img
            alt="white line figure of a person seated over the axis of a wheel, blue background"
            src="//upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Handicapped_Accessible_sign.svg/220px-Handicapped_Accessible_sign.svg.png"
            decoding="async"
            width="220"
            height="220"
            className="mw-file-element"
            srcSet="//upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Handicapped_Accessible_sign.svg/330px-Handicapped_Accessible_sign.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Handicapped_Accessible_sign.svg/440px-Handicapped_Accessible_sign.svg.png 2x"
            data-file-width="451"
            data-file-height="451"
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

      <img
        alt=""
        src="https://courses.edx.org/assets/courseware/v1/69967b1855807933c080f1d765394c64/asset-v1:W3Cx+WAI0.1x+3T2019+type@asset+block/gray-line.png"
        width={"100%"}
      />

      <h2>
        <span
          className="mw-headline"
          id="Assistive_technology_and_adaptive_technology"
        >
          Assistive technology and adaptive technology
        </span>
        <span className="mw-editsection"></span>
      </h2>
      <p>
        <a href="/wiki/Assistive_technology" title="Assistive technology">
          Assistive technology
        </a>{" "}
        is the creation of a new device that assists a person in completing a
        task that would otherwise be impossible. Some examples include new
        computer software programs like{" "}
        <a href="/wiki/Screen_reader" title="Screen reader">
          screen readers
        </a>
        , and inventions such as{" "}
        <a
          href="/wiki/Assistive_listening_devices"
          className="mw-redirect"
          title="Assistive listening devices"
        >
          assistive listening devices
        </a>
        , including{" "}
        <a href="/wiki/Hearing_aid" title="Hearing aid">
          hearing aids
        </a>
        , and{" "}
        <a href="/wiki/Traffic_light" title="Traffic light">
          traffic lights
        </a>{" "}
        with a standard{" "}
        <a href="/wiki/Color_code" title="Color code">
          color code
        </a>{" "}
        that enables{" "}
        <a href="/wiki/Colorblind" className="mw-redirect" title="Colorblind">
          colorblind
        </a>{" "}
        individuals to understand the correct signal.
      </p>
      <p>
        Adaptive technology is the modification, or adaptation, of existing
        devices, methods, or the creation of new uses for existing devices, to
        enable a person to complete a task.
        <sup id="cite_ref-29" className="reference">
          <a href="#cite_note-29">[29]</a>
        </sup>{" "}
        Examples include the use of remote controls, and the{" "}
        <a href="/wiki/Autocomplete" title="Autocomplete">
          autocomplete
        </a>{" "}
        (word completion)
        <sup id="cite_ref-30" className="reference">
          <a href="#cite_note-30">[30]</a>
        </sup>{" "}
        feature in computer word processing programs, which both help
        individuals with mobility impairments to complete tasks. Adaptations to
        wheelchair tires are another example; widening the tires enables
        wheelchair users to move over soft surfaces, such as deep snow on ski
        hills, and sandy beaches.
      </p>
    </div>
  );
};
