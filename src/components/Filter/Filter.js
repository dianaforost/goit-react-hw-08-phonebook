
import { selectFilter } from '../../redux/contacts/selectors'
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from 'redux/filtersSlice';
import css from './Filter.module.css'
export const Filter = () =>{
    const dispatch = useDispatch()
    const filter = useSelector(selectFilter);
    // console.log(filter.filter);

    // const onChange = (e) =>{
    //     const filterEl = e.currentTarget.value.toLowerCase();
    //     dispatch(setFilter(filterEl))
    // }
    return <div className={css.filterContainer}>
    <label className={css.label}>Find contacts by name</label>
    <input className={css.inputFilter} type="text"
     value={filter.filter} 
     onChange={e => dispatch(setFilter(e.currentTarget.value))}
    ></input>
    </div>
};