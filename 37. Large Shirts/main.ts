function make_shirt(
  size: string = "large",
  message: string = "I love Typescript"
) {
  console.log(
    `Making a ${size} t-shirt with the message "${message}" printed on it.`
  );
}
make_shirt(); //Deafult large and message
make_shirt("medium"); //deafult message ,medium size\
make_shirt("small", "Dive into Coding"); //Custom message, small size
