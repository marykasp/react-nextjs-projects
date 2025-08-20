const FeedbackForm = () => {
  return (
    <form className="form">
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company
      </label>
      <textarea name="" id="feedback-textarea" placeholder="feedback" />

      <div>
        <p className="u-italic">150</p>
        <button type="submit">
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;
