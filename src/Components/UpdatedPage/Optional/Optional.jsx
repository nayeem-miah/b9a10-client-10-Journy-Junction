import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContextProvider";
import { Navigate, useNavigate } from "react-router-dom";

const Optional = () => {
  const { user } = useContext(AuthContext);
  // const navigate = useNavigate();
  // console.log(user);
  const handleComment = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const comment = form.comment.value;
    const userComment = { email, comment };
    console.log(userComment);
    fetch("http://localhost:5000/comment", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userComment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
          alert("successfully comment");
        }
      });
  };
  return (
    <div>
      <div>
        <form onSubmit={handleComment}>
          <label htmlFor="">
            Your Comments :
            <br />
          </label>
          <input
            type="email"
            placeholder="enter email"
            name="email"
            defaultValue={user?.email}
            className="input input-bordered input-secondary w-full my-5"
          />
          <br />
          <p>Your Comments</p>
          <textarea
            name="comment"
            // typeof="textarea"
            className="textarea textarea-secondary w-full"
            placeholder="Your Comment"
          ></textarea>
          <br />
          <input
            className="btn-primary btn w-full my-4"
            type="submit"
            value="submit"
          />
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default Optional;
