'use strict';
PinseliaChatAvatar.instance.ready.then(() => {
  if (PinseliaChatAvatar.instance.pack) PinseliaChatAvatar.instance.open();
  document.getElementById('call-avatar').onclick = () => PinseliaChatAvatar.instance.open();
});
