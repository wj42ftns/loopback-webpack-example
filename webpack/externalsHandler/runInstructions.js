module.exports = function runInstructions(request, instructions) {
  for (const instruction of instructions) {
    if (typeof instruction === 'function') {
      const result = instruction(request);
      if (result) {
        return result;
      } else {
        continue;
      }
    }

    const [regexp, result] = instruction;
    const match = getMatch(request, regexp);
    if (match) {
      return getInstructionResult(result, match);
    }
  }
}

function getMatch(request, regexp) {
  if (!Array.isArray(regexp)) {
    return request.match(regexp);
  }

  const [stringOrArr, options] = regexp;
  const string = Array.isArray(stringOrArr) ? stringOrArr.join('') : stringOrArr;
  return request.match(string, options);
}

function getInstructionResult(result, match) {
  if (typeof result === 'string') {
    return result;
  }

  return result(match);
}
