import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentSort, setSort } from './filtersSlice';

export const useSort = () => {
    const dispatch = useDispatch();
    const currentSort = useSelector(selectCurrentSort);

    const handleChange = (event) => dispatch(setSort(event.target.value));

    return [currentSort, handleChange];
};

export default useSort;
