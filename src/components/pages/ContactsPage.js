import { PhoneBook } from "components/PhoneBook/PhoneBook";
import { SectionFirst } from "components/Section/SectionFirst";
import { SectionSec } from "components/Section/SectionSec";
import { Contacts } from "components/Contacts/Contacts";
import { Filter } from "components/Filter/Filter";
export default function ContactsPage(){
    return <div style={{height: '100vh',
        background: '-webkit-linear-gradient(left, #3931af, #00c6ff)'}}>
        <SectionFirst title="PhoneBook">
        <PhoneBook />
        </SectionFirst>
        <SectionSec title="Contacts">
            <Filter />
            <Contacts />
        </SectionSec>
    </div>
}