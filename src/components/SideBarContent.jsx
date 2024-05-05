import { CreateOutlined } from '@mui/icons-material'
import { Box, Button, List, ListItem, styled } from '@mui/material'
import { SIDEBAR_DATA } from '../config/sidebar.config'

const SideBarContent = () => {
  const ComposeButton = styled(Button)({
    background: '#c2e7ff',
    color: '#001d35',
    padding: 15,
    borderRadius: 16,
    minWidth: 140,
    textTransform: 'none',
  })

  const Container = styled(Box)({
    padding: 8,
    '& > ul': {
      padding: '10px 0 0 5px',
      fontSize: 14,
      fontWeight: 500,
      cursor: 'pointer',
    },
    '& > ul > li > svg': {
      marginRight: 20,
    },
  })
  return (
    <Container>
      <ComposeButton>
        <CreateOutlined /> Compose
      </ComposeButton>
      <List>
        {SIDEBAR_DATA.map((item) => {
          return (
            <ListItem>
              <item.icon fontSize="small" />
              {item.title}
            </ListItem>
          )
        })}
      </List>
    </Container>
  )
}
export default SideBarContent
