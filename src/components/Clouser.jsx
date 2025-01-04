import React, { useState } from 'react';

const ClosureExamples = () => {
  const [selectedExample, setSelectedExample] = useState(null); // State to track the selected example
  // Examples with code and description
  const examples = {
    Example1: {
      description: 'Simple Counter Example',
      code: `
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
      `,
      run: () => {
        function createCounter() {
          let count = 0;
          return function () {
            count++;
            return count;
          };
        }
        const counter = createCounter();
        return `Counter 1 : ${counter()}, Counter 2 : ${counter()} `;
      },
    },
    Practice_1_: {
      description: 'Simple Counter Example',
      code: `
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3
console.log(counter()); // Output: 4
      `,
      run: () => {
        function createCounter() {
          let count = 0;
          return function () {
            count++;
            return count;
          };
        }
        const counter = createCounter();
        return `Counter 1: ${counter()}, Counter 2: ${counter()} , Counter 3: ${counter()}, Counter 4: ${counter()}`;
      },
    },
    Example2: {
      description: 'Function with Parameters',
      code: `
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);
console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15
      `,
      run: () => {
        function multiplier(factor) {
          return function (number) {
            return number * factor;
          };
        }
        const double = multiplier(2);
        const triple = multiplier(3);
        return `Double of 5: ${double(5)}, Triple of 5: ${triple(5)}`;
      },
    },
    Practice_2_: {
      description: 'Function with Parameters',
      code: `
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const quadruple = multiplier(4);
const quintuple = multiplier(5);
console.log(quadruple(5)); // Output: 20
console.log(quintuple(5)); // Output: 25
      `,
      run: () => {
        function multiplier(factor) {
          return function (number) {
            return number * factor;
          };
        }

        const quadruple = multiplier(4)
        const quintuple = multiplier(5)
        return `Quadruple of 5 : ${quadruple(5)}, Quintuple of 5 : ${quintuple(5)}`;
      },
    },
    Example3: {
      description: 'Private Variable Example',
      code: `
function secretKeeper(secret) {
  return {
    getSecret: () => secret,
    setSecret: (newSecret) => (secret = newSecret),
  };
}

const mySecret = secretKeeper('I love JavaScript');
mySecret.setSecret('Closures are powerful!');
console.log(mySecret.getSecret()); // Output: 'Closures are powerful!'
      `,
      run: () => {
        function secretKeeper(secret) {
          return {
            getSecret: () => secret,
            setSecret: (newSecret) => (secret = newSecret),
          };
        }
        const mySecret = secretKeeper('I love JavaScript');
        mySecret.setSecret('Closures are powerful!');
        return `Secret: ${mySecret.getSecret()}`;
      },
    },
    Practice_3_: {
      description: 'Private Variable Example',
      code: `
function secretKeeper(secret) {
  return {
    getSecret: () => secret,
    setSecret: (newSecret) => (secret = newSecret),
  };
}

const mySecret = secretKeeper('I'm Learning JS and React');
mySecret.setSecret(' with Closures which are very powerful!');
console.log(mySecret.getSecret()); // Output: 'with Closures which are very powerful!'
      `,
      run: () => {
        function secretKeeper(secret) {
          return {
            getSecret: () => secret,
            setSecret: (newSecret) => (secret = newSecret),
          };
        }
        const mySecret = secretKeeper('Im Learning JS and React');
        mySecret.setSecret('with Closures which are very powerful!');
        return `Secret: ${mySecret.getSecret()}`;
      },
    },
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Closure Examples</h1>
      <div className="flex flex-col gap-4">
        {Object.keys(examples).map((example, index) => (
          <button
            key={index}
            onClick={() => setSelectedExample(example)}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            {example}
          </button>
        ))}
      </div>
      <div className="mt-6 p-4 border rounded bg-gray-100">
        {selectedExample ? (
          <>
            <h2 className="text-xl font-semibold mb-2">
              {selectedExample}: {examples[selectedExample].description}
            </h2>
            <pre className="bg-gray-200 p-4 rounded">
              <code>{examples[selectedExample].code}</code>
            </pre>
            <p className="mt-4">
              <strong>Output:</strong> {examples[selectedExample].run()}
            </p>
          </>
        ) : (
          <p>Select an example to view the code and output.</p>
        )}
      </div>
    </div>
  );
};

export default ClosureExamples;
