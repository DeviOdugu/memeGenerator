import {Component} from 'react'
import {
  Container,
  Heading,
  Form,
  UrlLabel,
  UrlInput,
  TopTextLabel,
  TopTextInput,
  BottomTextLabel,
  BottomTextInput,
  Button,
  FontSizeLabel,
  FontSizeOption,
  Select,
  TopText,
  BottomText,
  TextDiv,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    urlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    fontSizeValue: fontSizesOptionsList[0].optionId,
    imgUrl: '',
    topText: '',
    bottomText: '',
    fontSize: '',
  }

  onChangeUrlInput = event => {
    this.setState({urlInput: event.target.value})
  }

  onChangeTopTextInput = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomTextInput = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeFontSizeValue = event => {
    this.setState({fontSizeValue: event.target.value})
  }

  onClickGenerateButton = event => {
    event.preventDefault()
    const {urlInput, topTextInput, bottomTextInput, fontSizeValue} = this.state
    this.setState({
      imgUrl: urlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      fontSize: fontSizeValue,
    })
  }

  render() {
    const {
      urlInput,
      topTextInput,
      bottomTextInput,
      imgUrl,
      topText,
      bottomText,
      fontSize,
    } = this.state

    return (
      <Container>
        <Form>
          <Heading>Meme Generator</Heading>
          <UrlLabel htmlFor="imgUrl">Image URL</UrlLabel>
          <br />
          <UrlInput
            type="text"
            value={urlInput}
            id="imgUrl"
            placeholder="Enter the Image URL"
            onChange={this.onChangeUrlInput}
          />
          <br />
          <TopTextLabel htmlFor="topText">Top Text</TopTextLabel>
          <br />
          <TopTextInput
            type="text"
            value={topTextInput}
            id="topText"
            placeholder="Enter the Top Text"
            onChange={this.onChangeTopTextInput}
          />
          <br />
          <BottomTextLabel htmlFor="bottomText">Bottom Text</BottomTextLabel>
          <br />
          <BottomTextInput
            type="text"
            value={bottomTextInput}
            id="bottomText"
            placeholder="Enter the Bottom Text"
            onChange={this.onChangeBottomTextInput}
          />
          <br />
          <FontSizeLabel htmlFor="fontSize">Font Size</FontSizeLabel>
          <br />
          <Select id="fontSize" onChange={this.onChangeFontSizeValue}>
            {fontSizesOptionsList.map(eachOption => (
              <FontSizeOption
                key={eachOption.optionId}
                value={eachOption.optionId}
              >
                {eachOption.displayText}
              </FontSizeOption>
            ))}
          </Select>
          <br />
          <Button type="button" onClick={this.onClickGenerateButton}>
            Generate
          </Button>
        </Form>
        <div>
          <TextDiv data-testid="meme" imageUrl={imgUrl} alt="meme">
            <TopText fontSize={fontSize}>{topText}</TopText>
            <BottomText fontSize={fontSize}>{bottomText}</BottomText>
          </TextDiv>
        </div>
      </Container>
    )
  }
}

export default MemeGenerator
