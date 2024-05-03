async function query(data) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/MariamMounnir/Bart_SP",
    {
      headers: {
        Authorization: "Bearer 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",
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  return result;
}

query({
  inputs:
    "The FIFA World Cup is one of the most prestigious events in football, attracting teams and fans from around the globe. The tournament is held every four years and showcases the pinnacle of football excellence. Teams compete fiercely for the coveted trophy, representing their nations on the world stage. With thrilling matches and unforgettable moments, the World Cup captivates audiences worldwide, uniting fans in celebration of the beautiful game.",
}).then((response) => {
  console.log(JSON.stringify(response));
});
