import app from 'flarum/app';

import WechatSettingsModal from 'stanleysong/auth/wechat/components/WechatSettingsModal';

app.initializers.add('flarum-auth-wechat', () => {
  app.extensionSettings['flarum-auth-wechat'] = () => app.modal.show(new WechatSettingsModal());
});
