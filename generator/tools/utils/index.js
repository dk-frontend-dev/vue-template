const fs = require("fs");

function writeFile(path, content) {
	let ret = true;
	try {
		fs.writeFileSync(path, content, { encoding: "utf8" });
	} catch (e) {
		console.log(e);
		ret = false;
	}
	return ret;
}

function readFile(path) {
	let ret = "";
	try {
		ret = fs.readFileSync(path, { encoding: "utf8" });
	} catch (e) {
		console.log(e);
		ret = "";
	}
	return ret;
}

function removeFile(path) {
	try {
		fs.unlinkSync(path)
	} catch(e) {
		console.log(e);
	}
}

module.exports = {
    readFile,
	writeFile,
	removeFile
};
