import { chatWithAgent } from './agent';

async function main() {
  try {
    const result = await chatWithAgent(
      'Can you help me set up a CI/CD pipeline for a Node.js application?',
    );
    console.log('Agent Response:', result);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
