export default function SurveyForm({data}) {
  console.log(data);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }
  function formatQuestions() {
    return data.questions.map( q => {
      if (q.type === 'mcq') {
        let options = q.options.map((opt, i) => {
          return (
            <div className='mcq-div'>
              <input 
                key={`mcqOption${i}`}
                type='radio'
                name={opt.text}
                value={opt.text}
              />
              <label for={opt.text}>
                {opt.text}
              </label>
            </div>
          )
        })
        return (
          <>
            <h3>{q.stem}</h3>
            {options}
          </>
        )
      }
      if (q.type === 'cr') {
        if (q.lines === 1) {
          return (
            <>
              <h3
                className='form-single'
              >{q.stem}</h3>
              <input type="text"></input>
            </>
          )
        }
        return (
          <>
            <h3>{q.stem}</h3>
            <textarea></textarea>
          </>
        )
      }
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>{data.name}</h2>
      <p>{data.instructions}</p>
      {formatQuestions()}
      <button type='submit'>Submit Survey</button>
    </form>
  )
}