export default function Menu(props: Props) {
  const { clearData, loadSampleData } = props;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className='flex flex-wrap gap-2 rounded-2xl bg-white p-4 shadow-md'>
      <button onClick={loadSampleData} className='btn'>
        Load Sample Data
      </button>
      <button onClick={handlePrint} className='btn'>
        Export to PDF
      </button>
      <button onClick={clearData} className='btn'>
        Clear Data
      </button>
    </div>
  );
}

type Props = {
  clearData: () => void;
  loadSampleData: () => void;
};
