import { Page } from "@/components/page";
import { EventItem } from "@/components/events/EventItem";

const Events = () => {
  return (
    <Page title="Мероприятия">
      <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 container m-auto">
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
      </div>
    </Page>
  );
};

export default Events;
