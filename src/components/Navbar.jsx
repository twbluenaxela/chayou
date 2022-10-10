import { Nav, Navbar, NavDropdown, Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { pinyin } from 'pinyin-pro'

const NavigationBar = ({ navigateToSearchPage }) => {
  // console.log('Type of nav')
  const [searchTerm, setSearchTerm] = useState('')

  const hasChinese = (str) => {
    return /[\u4E00-\u9FA5]+/g.test(str)
  }

  const commonTeas = [
    {
      pinyin: 'lv cha',
      englishName: 'green tea'
    },
    {
      pinyin: 'hong cha',
      englishName: 'green tea'
    },
    {
      pinyin: 'hei cha',
      englishName: 'dark tea'
    },
    {
      pinyin: 'bai cha',
      englishName: 'white tea'
    },
    {
      pinyin: 'pu er',
      englishName: 'puerh'
    },
    {
      pinyin: 'pu er cha',
      englishName: 'pu-erh'
    },
    {
      pinyin: 'wu long cha',
      englishName: 'oolong'
    },
  ]
  
  const handleSetSearch = (e) => {
    e.preventDefault()
    /**
     * So apparently node.js doesn't support Chinese characters. Therefore, in the past when I tried to send a request to the backend
     * to search for a specific tea, it would just give me a bunch of weird text, and go into an infinite loop. So now I make sure to convert
     * them back to english/pinyin first. 
     */
    if(hasChinese(searchTerm)){
      const convertedSearchTerm = pinyin(searchTerm, { toneType: "none", v: "true" })
      const foundCommonlySearchedTeaTerm = commonTeas.find(({ pinyin }) => pinyin === convertedSearchTerm)
      console.log(foundCommonlySearchedTeaTerm)
      navigateToSearchPage(foundCommonlySearchedTeaTerm ? foundCommonlySearchedTeaTerm.englishName : convertedSearchTerm)
      console.log('Converted to: ', convertedSearchTerm)
    }else{
      navigateToSearchPage(searchTerm)
    }
  }


  return (
    <Navbar bg="light" variant="light" >
      <Container fluid>
        <Navbar.Brand className="ms-4" >
            <Link to='/' style={{ textDecoration: 'none' }} >茶友</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto my-2 my-lg-0">
            {
              //remove this useles link later, id rather them click on the logo instead. 
            }


          </Nav>
          <Form className="d-flex me-4 " onSubmit={handleSetSearch} style={{ float: "right" }}  >
            <Form.Control
              type="search"
              placeholder="搜索。。。 Search"
              aria-label="Search"
              className="text-wrap"
              id="search-input"
              value={searchTerm}
              onChange={({ target }) => setSearchTerm(target.value)}
            />
            <Button variant="outline-success" type="submit" className="ms-2" id="search-button" >搜尋名茶</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
