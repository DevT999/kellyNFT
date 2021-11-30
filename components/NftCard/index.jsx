import React, { useState, useContext, useCallback } from 'react'
import styled from 'styled-components'
// import {
//   Card,
//   CardBody,
//   Heading,
//   Tag,
//   Button,
//   ChevronUpIcon,
//   ChevronDownIcon,
//   Text,
//   CardFooter,
//   useModal,
// } from '@pancakeswap-libs/uikit'
import { Accordion, Card, Button } from 'react-bootstrap';
import InfoRow from '../InfoRow'

const Header = styled(InfoRow)`
  min-height: 28px;
`

const DetailsButton = styled(Button).attrs({ variant: 'text', fullWidth: true })`
  height: auto;
  padding: 16px 24px;

  &:hover:not(:disabled):not(:active) {
    background-color: transparent;
  }

  &:focus:not(:active) {
    box-shadow: none;
  }
`

const InfoBlock = styled.div`
  padding: 0 24px 24px;
`

const NftCard = ({ nft }) => {
  const [isOpen, setOpen] = useState(false)
  
  const { name, image, symbol, description } = nft
  // const Icon = isOpen ? ChevronUpIcon : ChevronDownIcon

  const handleClick = async () => {
    setOpen(!isOpen);
  }
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
          {name}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <div className="row">
              <div className="col-3">
                <img src={image} className="mw-100" alt={name} />
              </div>
              <div className="col-9">{description}</div>
            </div>
          </Card.Body>
        </Accordion.Collapse>
        {/* <CardBody>
          <Header>
            <Heading>{name}</Heading>
          </Header>
        </CardBody>
        <CardFooter p="0">
          <DetailsButton endIcon={<Icon width="24px" color="primary" />} onClick={handleClick}>
            Details
          </DetailsButton>
          {isOpen && (
            <InfoBlock>
              <Text as="p" color="textSubtle" mb="16px" style={{ textAlign: 'center' }}>
                {description}
              </Text>
              <InfoRow>
                <Text>Symbol:</Text>
                <Value>{symbol}</Value>
              </InfoRow>
            </InfoBlock>
          )}
        </CardFooter> */}
      </Card>
    </Accordion>
  )
}

export default NftCard
