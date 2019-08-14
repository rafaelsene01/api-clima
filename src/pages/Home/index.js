import React, { useState, useEffect, useMemo } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { format, parseISO } from 'date-fns';

import api from '~/services/api';
import { Container, Nav, Cidade, Header, Clima, Temperatura } from './styles';

const token = 'd3a68dc4d7cf177f7d14903951d3c263';

export default function Home() {
  const [cidade, setCidade] = useState({
    id: 3477,
    name: 'São Paulo',
    state: 'SP',
    country: 'BR',
    data: {
      temperature: 23.8,
      wind_direction: 'NW',
      wind_velocity: 22,
      humidity: 43,
      condition: 'Poucas nuvens',
      pressure: 1008,
      icon: '2',
      sensation: 27,
      date: '2017-10-01 12:37:00',
    },
  });

  const dateFormatted = useMemo(
    () => (cidade ? format(parseISO(cidade.data.date), 'dd/MM/yyyy') : null),
    [cidade]
  );

  async function getClimaCidade(id) {
    const response = await api.get(`/clima/${id}/${token}`);

    setCidade(response.data);
  }

  async function getCidade(cidade) {
    const response = await api.get(`/cidade/${cidade}/${token}`);

    const { id } = response.data;

    getClimaCidade(id);
  }

  useEffect(() => {}, []);

  async function handleSubmit({ cidade }) {
    getCidade(cidade);
  }

  return (
    <Container>
      <Nav>
        <Form onSubmit={handleSubmit}>
          <span>Cidade</span>
          <Input name="cidade" type="text" />
          <button type="submit">Buscar</button>
        </Form>
      </Nav>
      {cidade ? (
        <Cidade>
          <Header>
            <span>{cidade.name}</span>
            <span>{dateFormatted}</span>
          </Header>

          <h1>{cidade.data.condition}</h1>
          <Clima>
            <img
              src={require(`../../assets/${cidade.data.icon}.png`)}
              alt="clima"
            />
            <Temperatura>
              <span>{cidade.data.temperature}°</span>
              <span className="temp">{cidade.data.sensation}°</span>
            </Temperatura>
          </Clima>
        </Cidade>
      ) : (
        <Cidade>
          <h1>Escolha a cidade</h1>
        </Cidade>
      )}
    </Container>
  );
}
