import OpenAI from 'openai';


export default async function QueryProcessor(query: string): Promise<string> {
    const openai = new OpenAI({
        apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
        baseURL: "https://app.qusic.me/openai/v1",
    });
    const { data: completion, response } = await openai.completions.create({
        prompt:  query +' Can you only include answers in your response.',
        model: 'gpt-3.5-turbo-instruct',
      }).withResponse();

    return completion.choices[0].toString();
}
