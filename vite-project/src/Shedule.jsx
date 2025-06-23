import { motion } from 'framer-motion';
import { FaClock, FaCalendarAlt } from 'react-icons/fa';

const Schedule = () => {
  const scheduleData = [
    { day: "Monday", classes: [
      { name: "Hatha Yoga", time: "6:00 - 7:00 AM", teacher: "Rahul" },
      { name: "Vinyasa Flow", time: "5:30 - 6:45 PM", teacher: "Priya" },
      { name: "Meditation", time: "7:00 - 7:45 PM", teacher: "Anand" }
    ]},
    { day: "Tuesday", classes: [
      { name: "Yin Yoga", time: "6:30 - 8:00 AM", teacher: "Meera" },
      { name: "Prenatal Yoga", time: "10:00 - 11:00 AM", teacher: "Neha" },
      { name: "Hatha Yoga", time: "6:00 - 7:00 PM", teacher: "Rahul" }
    ]},
    { day: "Wednesday", classes: [
      { name: "Ashtanga", time: "6:00 - 7:30 AM", teacher: "Vikram" },
      { name: "Vinyasa Flow", time: "5:30 - 6:45 PM", teacher: "Priya" },
      { name: "Meditation", time: "7:00 - 7:45 PM", teacher: "Anand" }
    ]},
    { day: "Thursday", classes: [
      { name: "Hatha Yoga", time: "6:30 - 7:30 AM", teacher: "Rahul" },
      { name: "Yin Yoga", time: "5:00 - 6:30 PM", teacher: "Meera" },
      { name: "Restorative", time: "7:00 - 8:00 PM", teacher: "Neha" }
    ]},
    { day: "Friday", classes: [
      { name: "Vinyasa Flow", time: "6:00 - 7:15 AM", teacher: "Priya" },
      { name: "Meditation", time: "6:00 - 6:45 PM", teacher: "Anand" }
    ]},
    { day: "Saturday", classes: [
      { name: "Weekend Flow", time: "8:00 - 9:30 AM", teacher: "Vikram" },
      { name: "Family Yoga", time: "10:00 - 11:00 AM", teacher: "Neha" },
      { name: "Advanced Ashtanga", time: "4:00 - 5:30 PM", teacher: "Vikram" }
    ]},
    { day: "Sunday", classes: [
      { name: "Sunrise Yoga", time: "6:30 - 7:30 AM", teacher: "Priya" },
      { name: "Meditation", time: "8:00 - 8:45 AM", teacher: "Anand" },
      { name: "Yin & Restore", time: "5:00 - 6:30 PM", teacher: "Meera" }
    ]}
  ];

  return (
    <section id="schedule" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Class Schedule</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our weekly schedule offers a variety of classes throughout the day. Find a time that works for you
            and join our community of yoga practitioners.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-7 divide-x divide-gray-200">
            {scheduleData.map((daySchedule, index) => (
              <div key={index} className="py-4">
                <div className="text-center font-bold text-primary border-b pb-2 mb-2">
                  {daySchedule.day}
                </div>
                <div className="px-2">
                  {daySchedule.classes.map((cls, clsIndex) => (
                    <motion.div
                      key={clsIndex}
                      whileHover={{ scale: 1.02 }}
                      className="mb-3 p-2 bg-gray-50 rounded-md"
                    >
                      <div className="font-medium text-gray-800">{cls.name}</div>
                      <div className="flex items-center text-sm text-gray-600 mt-1">
                        <FaClock className="mr-1" /> {cls.time}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">with {cls.teacher}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <button className="bg-primary hover:bg-secondary text-white font-medium py-3 px-6 rounded-full inline-flex items-center transition-colors">
            <FaCalendarAlt className="mr-2" />
            Download Full Schedule
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;