* [jq manual](https://stedolan.github.io/jq/manual/)
* [JSON on the command line with jq](https://shapeshed.com/jq-json/)
* YouTube vídeo [JSON: Like a Boss](https://youtu.be/_ZTibHotSew). Bob Tiernay explores the fascinating world of jq, "the JSON Processor”. Starting with a motivation, he then covers the language, provides helpful tips, showcases a real world example, cautions some things to avoid and finishes with a discussion of the ecosystem.
* [jq recipes](https://remysharp.com/drafts/jq-recipes)

```
[~/local/src/CA/sol-nodejs-the-right-way/commanding-databases-chapter-6/esclu(master)]$ jq -V
jq-1.5
[~/local/src/CA/sol-nodejs-the-right-way/commanding-databases-chapter-6/esclu(master)]$ jq --help
```
```
jq - commandline JSON processor [version 1.5]
Usage: jq [options] <jq filter> [file...]

	jq is a tool for processing JSON inputs, applying the
	given filter to its JSON text inputs and producing the
	filter's results as JSON on standard output.
	The simplest filter is ., which is the identity filter,
	copying jq's input to its output unmodified (except for
	formatting).
	For more advanced filters see the jq(1) manpage ("man jq")
	and/or https://stedolan.github.io/jq

	Some of the options include:
	 -c		compact instead of pretty-printed output;
	 -n		use `null` as the single input value;
	 -e		set the exit status code based on the output;
	 -s		read (slurp) all inputs into an array; apply filter to it;
	 -r		output raw strings, not JSON texts;
	 -R		read raw strings, not JSON texts;
	 -C		colorize JSON;
	 -M		monochrome (don't colorize JSON);
	 -S		sort keys of objects on output;
	 --tab	use tabs for indentation;
	 --arg a v	set variable $a to value <v>;
	 --argjson a v	set variable $a to JSON value <v>;
	 --slurpfile a f	set variable $a to an array of JSON texts read from <f>;
	See the manpage for more options.
```

See also the man pages:

```
[~/local/src/CA/sol-nodejs-the-right-way/commanding-databases-chapter-6/esclu(master)]$ man jq
```
