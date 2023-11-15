import TextLink from '@src/shared/ui/TextLink/TextLink';

const learnMoreDataRu = [
  {
    label: 'Amnezia это VPN сервис?',
    content:
      'Нет Amnezia это не VPN-сервис, это VPN- клиент с помощью которого вы сможете настроить свой VPN-сервис и пользоваться им.',
  },
  {
    label: 'Амнезия бесплатная?',
    content:
      'Да, Амнезия абсолютно бесплатное ПО. Однако для создания собственного VPN нужно приобрести любой VPS любого провайдера.',
  },
  {
    label: 'На каких устройствах с какими операционными системами работает Amnezia?',
    content: 'Есть версии для Windows, MacOS, Android, iOS, и Linux.',
  },
  {
    label: 'Amnezia собирает данные пользователей?',
    content: (
      <>
        Amnezia не собирает и не передаёт никакой статистики, логов, аналитики и любой другой
        информации о пользователях. Единственные данные которые запрашивает клиент это данные
        подключения, которые также не собираются и не передаются, что можно проверить благодаря{' '}
        <TextLink
          to="https://github.com/amnezia-vpn"
          variant="light"
          text="открытому исходному коду"
          openInNewTab
        />{' '}
        серверной и клиентской части ПО.
      </>
    ),
  },
  {
    label: 'Как работает Amnezia?',
    content:
      'Вы указываете IP-адрес, логин и пароль вашего сервера. Приложение подключается к серверу по SSH, устанавливает Docker и запускает серверные контейнеры Amnezia. Для каждого протокола подключения запускается отдельный контейнер, генерируются ключи и корневой сертификат. После того как сервер настроен, вы можете подключаться по VPN к этому серверу.',
  },
  {
    label: 'Почему Amnezia сложнее заблокировать чем другие VPN?',
    content:
      'Чем крупнее и популярнее коммерческий VPN сервис, тем больше его вероятность попадания в поле зрения надзорных органов, а значит и выше вероятность блокировки доступа к его серверам и протоколам. С помощью Amnezia вы создаете на базе любого VPS собственный VPN только для вашего использования. При использовании собственного VPS в связке с зашифрованными VPN протоколами, вероятность блокировки существенно снижается. Это могут подтвердить наши пользователи из стран с высоким уровнем цензуры.',
  },
  {
    label: 'Какие преимущества AmneziaVPN перед другими VPN? ',
    content: (
      <>
        <p>
          <strong>Полный контроль</strong> - у вас полный контроль над вашим собственным сервером
          VPN, включая настройку, безопасность, логирование и доступ к данным. Вы можете выбирать
          конфигурацию, протоколы шифрования и настройки безопасности в соответствии с вашими
          требованиями. Более подробно в разделе принцип работы амнезии.
        </p>
        <p>
          <strong>Мобильность</strong> - возможность использовать свой настроенный VPN не только с
          клиентом Amnezia, но и с другими нативными приложениями OpenVPN, OpenVPN connect или
          Wireguard.
        </p>
        <p>
          <strong>Устойчивость к блокировкам по IP</strong> - многие сайты, а также государственные
          регуляторы знают IP адреса популярных VPN серверов и вносят их в “черный список”. Покупая
          отдельный VPS, ваш IP адрес используете только вы и люди с которыми вы поделились данными
          для подключения, поэтому только вы знаете что этот адрес используется для VPN
        </p>
        <p>
          <strong>Устойчивость к блокировкам по VPN-протоколу</strong> - Amnezia поддерживает
          протокол Open VPN с маскировкой трафика cloak, его можно установить при первом подключении
          к серверу. Более подробно о плагине cloak.
        </p>
        <p>
          <strong>Возможность поделиться с другими пользователями</strong> - Amnezia поддерживает
          возможность делиться подключением с неограниченным числом пользователей. Для этого просто
          купите любой VPS сервер подключитесь к нему с помощью Amnezia, создайте конфигурацию для
          подключения и поделитесь ей со всеми , кому доверяете.
        </p>
        <p>
          <strong>Открытый исходный код</strong> - Amnezia, в отличие от большинства других VPN,
          имеет открытый исходный код, как серверной, так и клиентской части. Amnezia не собирает,
          не хранит и не передает данные пользователей. Любой пользователь может проверить это,
          посмотрев код на github.
        </p>
        <p>
          <strong>Поддержка нескольких протоколов</strong> - На одном VPN клиенте вы можете
          использовать самые разные протоколы от максимально защищенных и безопасных, таких как
          AmneziaWG и OpenVPN с плагином маскировки Cloak, до самых простых и быстрых , таких как
          Wireguard и IKv2. Более подробно о протоколах и о том, как их установить.
        </p>
      </>
    ),
  },
];

export default learnMoreDataRu;
