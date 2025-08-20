import { TriangleUpIcon } from "@radix-ui/react-icons";

const FeedbackList = () => {
  return (
    <ol className="feedback-list">
      <li className="feedback">
        <button>
          <TriangleUpIcon />
          <span>593</span>
        </button>

        {/* logo square */}
        <div>
          <p>B</p>
        </div>

        <div>
          <p>Company Name</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui autem
            minus illo, eaque mollitia similique dolorum corrupti maxime et
            culpa porro maiores fugit, iusto fugiat numquam necessitatibus esse
            dicta expedita.
          </p>
        </div>

        <p>4d</p>
      </li>
    </ol>
  );
};

export default FeedbackList;
