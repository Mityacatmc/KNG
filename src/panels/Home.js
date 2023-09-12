import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

const Home = ({ id, fetchedUser }) => {
  const handleRedirect = () => {
    window.location.href = 'https://vk.com/cat-new-year';
  };

  return (
    <Panel id={userdate}>
      <PanelHeader>Пример</PanelHeader>
      {fetchedUser && (
        <Group header={<Header mode="secondary">Данные пользователя, полученные с помощью VK Bridge</Header>}>
          <Cell
            before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
            subtitle={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
          >
            {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
          </Cell>
        </Group>
      )}

      <Group header={<Header mode="secondary">Пример навигации</Header>}>
        <Div>
          <Button stretched size="l" mode="secondary" onClick={go} data-to="persik">
            Показать мне Персика, пожалуйста
          </Button>
        </Div>
        <Div>
          <Button stretched size="l" mode="secondary" onClick={handleRedirect}>
            Перейти по ссылке
          </Button>
        </Div>
      </Group>
    </Panel>
  );
};

Home.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};

export default Home;