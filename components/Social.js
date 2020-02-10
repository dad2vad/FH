import { Col, Row } from 'react-bootstrap'

import Input from '../handlers/Input'
//   function TO(A) {
    
//     const res = fetch('https://api.telegram.org/bot695543276:AAHqIsFuK-hzCor9q3nO2WgVlV6UfRFRE7c/sendMessage?chat_id=986940575&text=' + JSON.stringify(A, null,4), {
//       method: 'POST'
//     })
//     const json = res.json()
//   }
const Social = () => {
  return (
    <div>
      <Row>
        <Col lg={8}>
          <Input controlLabel="Facebook" title="social" name="facebook" />
</Col>
        <Col lg={8}>
          <Input controlLabel="Instagram" title="social" name="instagram" />
        </Col>
        <Col lg={8}>
          <Input controlLabel="Twitter" title="social" name="twitter" />
        </Col>
        <Col lg={8}>
          <Input controlLabel="GitHub" title="social" name="github" />
        </Col>
      </Row>
    </div>
  )
}

export default Social
