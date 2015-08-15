import { equal } from 'assert';

export function test(input, process, answer) {
  let output = process.apply(this, input);
  try {
    equal(output, answer);
    console.log('\x1B\[32m' + `Input: ${input}\nOutput: ${output}\nCorrect Answer: ${answer}` + '\x1B\[0m' + '\n---');
  } catch (e) {
    if (e.name == 'AssertionError' ) {
      console.log('\x1B\[31m' + `Input: ${input}\nOutput: ${output}\nCorrect Answer: ${answer}` + '\x1B\[0m' + '\n---');
    } else {
      throw e;
    }
  }
};

