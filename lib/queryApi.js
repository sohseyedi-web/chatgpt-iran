import openAi from "./chatgpt-ai";

const queryApi = async (prompt) => {
  const res = await openAi
    .createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 0.9,
      max_tokens: 2048,
      presence_penalty: 0,
      frequency_penalty: 0,
    })
    .then((res) => res.data.choices[0].text)
    .catch((err) => {
      console.log(`error query: ${err.message}`);
    });

  return res;
};

export default queryApi;
