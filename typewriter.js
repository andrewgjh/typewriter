const sentence = "hello there from lighthouse labs";

const typewriter = function() {
  for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
      process.stdout.write(sentencse[i]);
      if (i === sentence.length - 1) {
        process.stdout.write("\n");
      }
    }, (i + 1) * 80);

  }

};

typewriter();