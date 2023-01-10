import axios from "axios";

function getQuiz(type, subject, chapter) {
  if (subject === "") {
    axios.get(`http://localhost:3000/${type}/`).then((res) => {
      return res.data;
    });
  } else if (chapter === "") {
    axios
      .get(`http://localhost:3000/${type}/subjectName=${subject}`)
      .then((res) => {
        return res.data;
      });
  } else {
    axios.get(`http://localhost:3000/${type}/subjectName=${subject}`);
  }
}
