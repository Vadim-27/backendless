import css from './dummyTable.module.scss';
const DummyTable = () => {
  return (
    <div>
      <h1 className={css.titleSection}>DummyTable</h1>
      <table>
        <tr>
          <td>Dummy</td>
          <td>Table</td>
        </tr>
      </table>
    </div>
  );
}
export default DummyTable;
