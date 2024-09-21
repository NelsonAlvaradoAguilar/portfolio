function Image({ image, institution, id }) {
  return (
    <section>
      {id === "1" ? (
        <img
          className="institutions__image"
          alt={institution?.school}
          src={image}
        />
      ) : (
        ""
      )}
    </section>
  );
}

export default Image;
