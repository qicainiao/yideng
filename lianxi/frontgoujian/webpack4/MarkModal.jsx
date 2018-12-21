import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'lodash'
import { Modal, Form, Input, message, Spin } from 'antd'
import { addRemark } from '../../../services/student'

const { TextArea } = Input
const FormItem = Form.Item

@Form.create({
  mapPropsToFields(props) {
    const { student = {} } = props
    return {
      remark: Form.createFormField({ value: student.remark || '' })
    }
  }
})
export default class MarkModal extends PureComponent {
  state = {
    loading: false
  }
  validate = (rule, value, callback) => {
    const { form } = this.props
    const remark = form.getFieldValue('remark')
    if (isEmpty(remark)) {
      callback('请先备注信息')
    } else {
      callback()
    }
  }
  off = () => {
    const {
      form: { validateFieldsAndScroll },
      student,
      onSuccess
    } = this.props
    validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.setState({ loading: true })
        addRemark({ id: student.id, ...values })
          .then(res => {
            if (res.result) {
              this.setState({ loading: false })
              message.success('添加备注成功')
              onSuccess()
            } else {
              this.setState({ loading: false })
              message.error('操作失败')
            }
          })
          .catch(() => this.setState({ loading: false }))
      }
    })
  }

  render() {
    const { show, onCancel, form } = this.props
    const { loading } = this.state
    const { getFieldDecorator } = form

    return (
      <Modal title="备注信息" visible={show} onCancel={onCancel} width={666} onOk={this.off} confirmLoading={loading}>
        <Spin spinning={loading}>
          <Form>
            <FormItem>
              {getFieldDecorator('remark', {
                rules: [{ validator: this.validate }]
              })(<TextArea placeholder="请填写0-100字备注信息" autosize rows={4} maxLength={100} />)}
            </FormItem>
          </Form>
        </Spin>
      </Modal>
    )
  }
}

MarkModal.propTypes = {
  show: PropTypes.bool,
  onCancel: PropTypes.func,
  onSuccess: PropTypes.func,
  student: PropTypes.shape({}),
  form: PropTypes.shape({})
}
