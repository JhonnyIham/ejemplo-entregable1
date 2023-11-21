import "./styles/QuoteBox.css"
const QuoteBox = ({quote, handleChangeQuote}) => {
    console.log(quote)
  return (
    <article className="quotebox">
        <h1 className="quotebox__title">INFOGALAX</h1>
        <div className="quotebox__box">
            <p>{quote.phrase}</p>
        </div>
        <button className="quotebox__btn" onClick={handleChangeQuote}>
          <img src="/boton.svg" alt="" />
        </button>
        <span className="quotebox__author">{quote.author}</span>
        <div className="contimg">
          <img className="img" src="/images/mundo (1).webp" alt="mundo" />
        </div>
    </article>
  )
}
export default QuoteBox