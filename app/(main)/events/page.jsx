import { getUserEvents } from "@/actions/events";
import EventCard from "@/components/event-card";
import { Suspense } from "react";

export default function EventsPage() {
  return (
    <Suspense fallback={<div>Loading events...</div>}>
      <Events />
    </Suspense>
  );
}

async function Events() {
  const { events, username } = await getUserEvents();

  if (events.length === 0) {
    return <p>You haven&apos;t created any events yet.</p>;
  }
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {events?.map((event) => (
        <EventCard key={event.id} event={event} username={username} />
      ))}
    </div>
  );
}
