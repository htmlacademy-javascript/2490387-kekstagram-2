const windows = [];
let listener = null;

const onDocumentKeydown = ({ key }) => {
  if (key === 'Escape') {
    const lastIndex = windows.length - 1;
    if(windows[lastIndex].condition && !windows[lastIndex].condition()){
      return;
    }
    windows[lastIndex].closeWindow();
    windows.length -= 1;

    if (!windows.length) {
      document.removeEventListener('keydown', onDocumentKeydown);
      listener = null;
    }
  }
};

export const setEscapeControl = (closeWindow, condition = null) => {
  windows.push({
    closeWindow,
    condition
  });
  if (!listener) {
    document.addEventListener('keydown', onDocumentKeydown);
  }
};

export const removeEscapeControl = () => {
  windows.length -= 1;
  if (!windows.length) {
    document.removeEventListener('keydown', onDocumentKeydown);
    listener = null;
  }
};
