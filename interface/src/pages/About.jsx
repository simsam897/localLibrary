import Feedback from "../componenets/Feedback";

const About = () => {
  return (
    <div>
      <h1 className="text-center text-3xl">Bio</h1>
      <div className="w-1/2 mx-auto flex justify-center sm-w-full border-2 border-black h-1/2">
        <p className="text-2xl sm-0 sm-w-full">
          In 2023, the management of the university unveiled "Library," a
          revolutionary book buddy system designed to enrich the academic and
          personal growth of students and staff alike. Library serves as a
          digital repository, providing access to a vast array of books spanning
          all disciplines and interests, catering to both avid readers and those
          seeking course-related materials. With its user-friendly interface,
          Library empowers users to discover, borrow, and engage with books
          effortlessly, fostering a culture of lifelong learning within the
          university community. Its extensive collection includes classics,
          contemporary literature, scholarly works, and research publications,
          ensuring that every user finds valuable resources to expand their
          knowledge horizon. Through seamless integration with the university's
          curriculum, Library facilitates access to essential textbooks and
          supplementary materials, enhancing the educational experience for
          students across various disciplines.
        </p>
      </div>

      <div className="w-1/2 mx-auto my-10">
        <h1 className="text-3xl">Suggestions</h1>
        <Feedback />
      </div>
      <div className="flex justify-center text-3xl">
        <div >
        <h1 >Contct Us     :</h1>
        </div>

        <ul>
          <li>
            <p>
              <span> bookbuddy11@gmail.com</span>
            </p>
          </li>

          <li>
            <p>
              <span>Mobile No: 1234567890</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
