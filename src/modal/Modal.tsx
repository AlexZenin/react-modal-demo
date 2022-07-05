import styled from 'styled-components'

const Container = styled.div`
  height: 300px;
  width: 300px;
  position: absolute;
  top: 0;
  right: 40%;
`
const ButtonRow = styled.div`
  display: flex;
  flex-direction: row-reverse;
`
const ConfirmationButton = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  background-color: red;
  :hover {
    cursor: pointer;
  }
`

export function Modal() {
  return (
    <Container>
      <h2>Are you sure you want to close?</h2>
      <p>
        Laboris anim mollit ipsum ea laboris irure ut aute fugiat. Ullamco nulla
        duis aute ea labore minim dolor. Veniam proident consequat anim.
        Consectetur non et ut nostrud sunt sit ullamco est exercitation ut
        incididunt irure excepteur consectetur ex. Excepteur esse amet sint anim
        commodo labore ea officia. Mollit dolore commodo dolore ut in dolore
        mollit exercitation. Anim officia ad magna ex eiusmod. Est exercitation
        consectetur irure nostrud veniam voluptate id sint incididunt aute
        pariatur id ea reprehenderit non. Sit occaecat ipsum eu eu sunt
        exercitation ea aute eiusmod nulla. Nostrud veniam elit magna id eu sunt
        sunt amet eu exercitation non exercitation quis.
      </p>
      <ButtonRow>
        <ConfirmationButton>Exit</ConfirmationButton>
      </ButtonRow>
    </Container>
  )
}
