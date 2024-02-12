// Style your components here
import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffffff;
  border: solid #efefef 2px;
  font-family: 'Open Sans';
  padding: 50px;
  margin: 10px;
  display: flex;
`
export const Heading = styled.h1`
  font-size: 20px;
  color: #35469c;
`
export const Form = styled.form``

export const UrlLabel = styled.label`
  color: #7e858e;
  font-size: 10px;
`
export const UrlInput = styled.input`
  color: #5a7184;
  font-size: 8px;
  outline: none;
  padding: 5px;
`
export const TopTextLabel = styled.label`
  color: #7e858e;
  font-size: 10px;
`
export const TopTextInput = styled.input`
  color: #5a7184;
  font-size: 8px;
  outline: none;
  padding: 5px;
`
export const BottomTextLabel = styled.label`
  color: #7e858e;
  font-size: 10px;
`
export const BottomTextInput = styled.input`
  color: #5a7184;
  font-size: 8px;
  outline: none;
  padding: 5px;
`
export const FontSizeLabel = styled.label`
  color: #7e858e;
  font-size: 10px;
`
export const Select = styled.select`
  outline: none;
  font-size: 8px;
  padding: 5px;
`
export const FontSizeOption = styled.option`
  color: #1e293b;
  font-size: 10px;
  outline: none;
`
export const Button = styled.button`
  border: none;
  padding: 5px;
  padding-left: 20px;
  padding-right: 20px;
  color: #d7dfe9;
  background-color: #0b69ff;
  font-size: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
`
export const TextDiv = styled.div`
  background-image: url('${props => props.imageUrl}');
  background-size: cover;
  //   height: 0vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 50px;
  margin-top: 60px;
  text-align: center;
  padding: 5px;
`
export const TopText = styled.p`
  color: #ffffff;
  font-size: ${props => props.fontSize}px;
`
export const BottomText = styled.p`
  color: #ffffff;
  font-size: ${props => props.fontSize}px;
`
