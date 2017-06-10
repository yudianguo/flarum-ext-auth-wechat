import Button from 'flarum/components/Button';

/**
 * stanley song (sxhuan@gmail.com)
 */
export default class WechatLogInButton extends Button {
  static initProps(props) {
    props.className = (props.className || '') + ' LogInButton';

    props.onclick = function() {
      const width = 800;
      const height = 400;
      const $window = $(window);

      window.open(app.forum.attribute('baseUrl') + props.path, 'logInPopup',
        `width=${width},` +
        `height=${height},` +
        `top=${($window.height() / 2) - (height / 2)},` +
        `left=${$window.width() / 2 - width / 2},` +
        'status=no,resizable=no');
    };

    super.initProps(props);
  }
}
