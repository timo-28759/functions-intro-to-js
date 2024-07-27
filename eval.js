const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const isEmptyObject = obj => Object.keys(obj).length === 0;
const added = [0, 1, 2, 3, 4].map((item) => item + 1);