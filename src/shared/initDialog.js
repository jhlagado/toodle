export const initDialog = (dialog) => {
    if (!dialog) return;
    window.dialogPolyfill.registerDialog(dialog);
    dialog.showModal();
}
