const Submission = () => {
  const btnStyle = {
    fontWeight: "100",
  };

  // const hrStyle = {
  //   width: "40%",
  //   marginLeft: "30%",
  //   borderTop: "3px dashed blue ",
  // };
  return (
    <div className="submit bg-gray-100/60 h-max">
      <hr />
      <div className="content  w-full px-14">
        <h1 className="text-center my-6 font-ourFont text-2xl lg:text-4xl animate-bounce underline text-ourBlue lg:mt-14 uppercase">
          SUBMISSION guidelines
        </h1>
        <p>
          Prospective authors are encouraged to submit papers for evaluation by
          the Program Committee. All submissions will be peer-reviewed by at
          least 3 peer reviewers with expertise in the area. This process will
          result in constructive feedback to the authors br
          <br />
          <br />
          the selection of the best contributions to be presented in the
          workshop and published in the proceedings. After the preliminary
          notification date, authors rebut by evidence and arguments all
          reviewer inquiries and their comments. Based on the rebuttal feedback,
          reviewers notify authors with the final decision. Selection criteria
          will include: relevance, significance, impact, originality, technical
          soundness, and quality of presentation. Preference will be given to
          submissions that take strong or challenging positions on important
          emergent topics related to the workshop. At least one author should
          attend the workshop to present the paper. All papers accepted for
          publication must follow the formatting rules for Springer Proceedings
          (https://www.iospress.com/book-article-instructions) and be written in
          English, with a length of at least 6 but no more than 10 pages. Latex
          and Word templates can be found in http://www
          <br />
          .iospress.nl/service/authors/latex-and-word-tools-for-book-authors.
          <br />
          <br />
          Important note for double blind review policy: The version of papers
          for evaluation by the Program Committee, saved in PDF format, must not
          include identification, e-mail, affiliation of the authors, grants,
          funding institution or any explicit information, that may disclose the
          authors’ identity (this information <br />
          <br />s to be restored in the camera-ready version upon acceptance).
          Please remove author names and affiliations (or replace it with Xs) on
          submitted papers. In particular, in the version submitted for review
          please avoid explicit auto-references, such as “as we shown in [1]” —
          consider “as shown in [1]“. i.e., you may cite your own previous works
          p<br />
          <br />
          rovided that it is not deducible from the text that the cited work
          belongs to the authors. This information must only be available in the
          camera-ready version of accepted papers, saved in Word or Latex format
          and also in PDF format. These files must be accompanied by the Consent
          to Publish form filled out, in a ZIP file, and uploaded at the
          conference management system. The submission system for this workshop
          is based on EasyChair. To submit or upload a pa
          <br />
          <br />
          per please go to
          https://easychair.org/conferences/?conf=sentirobots2022. All papers
          accepted in the Workshops program will be published as a volume of the
          Ambient Intelligence and Smart Environments Ser
          <br />
          <br />
          ies of IOS Press and electronically available through ACM Digital
          Library (pending approval). The proceedings will be ISI indexed
        </p>
        <br />

        <a
          target="blank"
          href="https://easychair.org/account/signin?l=sYEPpdPXZTcyjrogSzhcpW"
        >
          <button
            style={btnStyle}
            className="font-ourFont text-white bg-blue-500 hover:bg-blue-700  py-2 px-6 rounded-lg"
          >
            SUBMIT
          </button>
        </a>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Submission;
