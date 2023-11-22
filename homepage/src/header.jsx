import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from 'reactstrap';

function Example(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar {...args}>
                <NavbarBrand href="/">V-Mart</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink href="#mobile">Mobile</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#grocery">
                                Grocery
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Fashion
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>Men's Wear</DropdownItem>
                                <DropdownItem>Ladies Wear</DropdownItem>
                                <DropdownItem>Children Wear</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <NavbarText>Elecronics</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Example;